interface NumberAndGenderProps{
    number: number;
    isFemale: boolean;
}


export const numericToOrdinal = function(numberAndGender:NumberAndGenderProps) {

    switch( numberAndGender.number){

        case 0: return 'erro';
        case null: return 'erro';
        case undefined: return 'erro';
        case 1: return numberAndGender.isFemale == true?'Primeira':'Primeiro';
        case 2: return numberAndGender.isFemale == true?'Segunda':'Segundo';
        case 3: return numberAndGender.isFemale == true?'Terceira':'Terceiro';
        case 4: return numberAndGender.isFemale == true?'Quarta':'Quarto';
        case 5: return numberAndGender.isFemale == true?'Quinta':'Quinto';
        case 6: return numberAndGender.isFemale == true?'Sexta':'Sexto';
        default: return `${numberAndGender.number}º`
           
    }

}