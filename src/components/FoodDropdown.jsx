import "../styles/dropdown.css"

import AsyncSelect from "react-select/async";
import { getManyAlimentos } from "../services/api";

export default function FoodDropdown({ onChange }) {

    const loadOptions = (inputValue, callback) => {
        if (inputValue.length < 2) {
            return callback([]);
        }

        const timer = setTimeout(async () => {
            try {
                const data = await getManyAlimentos(inputValue);

                const formattedData = data.map((item) => ({
                    value: item.id,
                    label: item.nome,
                }));

                callback(formattedData);
            } catch (error) {
                callback([]);
            }
        }, 300);

        return () => clearTimeout(timer);
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