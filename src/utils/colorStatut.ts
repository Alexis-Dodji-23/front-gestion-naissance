const getColorStatut = (status :string) => {
    switch (status) {
        case "REJECTED":
            return "bg-red-500 text-white";
        case "NEW":
            return "bg-blue-500 text-white";
        case "VALIDATED":
            return "bg-green-500 text-white";
        case "ON_GOING":
            return "bg-amber-500 text-white";
    
        default:
            return"";
    }
}

const getLabelStatut = (status :string) => {
    switch (status) {
        case "NEW":
            return "Nouveau";
        case "REJECTED":
            return "Rejeté";
        case "VALIDATED":
            return "Validé";
        case "ON_GOING":
            return "En cours";
    
        default:
            return"";
    }
}

export {getColorStatut, getLabelStatut}