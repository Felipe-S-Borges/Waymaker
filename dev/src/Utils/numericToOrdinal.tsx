interface NumberAndGenderProps{
    number: number;
    isFemale: boolean;
}


export const numericToOrdinal = function(numberAndGender:NumberAndGenderProps) {

    switch( numberAndGender.number){

        case 0: return 'erro';
        case null: return 'erro';
        case undefined: return 'erro';
        case 1: return genderSet('Primeir',numberAndGender.isFemale)
        case 2: return genderSet('Segund',numberAndGender.isFemale)
        case 3: return genderSet('Terceir',numberAndGender.isFemale)
        case 4: return genderSet('Quart',numberAndGender.isFemale)
        case 5: return genderSet('Quint',numberAndGender.isFemale)
        case 6: return genderSet('Sext',numberAndGender.isFemale)
        default: return `${numberAndGender.number}º`
           
    }

}

function genderSet(string:string, gender:boolean){

    if(gender){
        return string.concat('','a')
    }
    return string.concat('','o')

}