import { search } from "@/services";
import type { Declaration } from "@/types/Declaration";
import { useEffect, useState } from "react";

function useDeclarations() {

    const[declarations, setDeclarations] = useState<Declaration[]>([]);

    const getDeclarations = async () => {
        const data = await search("declarations");
        setDeclarations(data);
    }

    useEffect(()=> {
        getDeclarations();
    },[]);

    return {declarations};
}

export {useDeclarations};