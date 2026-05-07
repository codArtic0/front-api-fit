import "../styles/dropdown.css"

import AsyncSelect from "react-select/async";
import { getManyAlimentos } from "../services/api";
import { useRef } from "react";

export default function FoodDropdown({ onChange }) {
    const abortControllerRef = useRef(null);
    const timerRef = useRef(null);

    const loadOptions = (inputValue, callback) => {
        if (inputValue.length < 2) {
            return callback([]);
        }

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        abortControllerRef.current = new AbortController();

        timerRef.current = setTimeout(async () => {
            try {
                const data = await getManyAlimentos(inputValue, abortControllerRef.current.signal);

                const formattedData = data.map((item) => ({
                    value: item.id,
                    label: item.nome,
                }));

                callback(formattedData);
            } catch (error) {
                if (error.name !== 'AbortError' && error.name !== 'CanceledError') {
                    callback([]);
                }
            }
        }, 500);

        return () => {
            clearTimeout(timerRef.current);
            abortControllerRef.current?.abort();
        };
    };

    return (
        <div style={{ width: '100%' }}>
            <AsyncSelect
                classNamePrefix="meu-select"
                loadOptions={loadOptions}
                onChange={(option) => onChange(option ? option.label : "")}
                placeholder="Digite o nome do alimento (ex: Arroz)..."
                loadingMessage={() => "Buscando no banco..."}
                noOptionsMessage={({ inputValue }) =>
                    inputValue.length < 2
                        ? "Digite pelo menos 2 letras"
                        : "Nenhum alimento encontrado"
                }
                isClearable
                cacheOptions
            />
        </div>
    );
}