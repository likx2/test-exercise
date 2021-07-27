import Cargo from "../types/Cargo";
import Terminal from "../types/Terminal";

export const findIdByName = (items: Terminal[] | Cargo[], name: string) => {
    return items.find(item => item.name === name)?.id as string;
}

export const findNameById = (items: Terminal[] | Cargo[], id: string) => {
    return items.find(item => item.id === id)?.name as string;
}

