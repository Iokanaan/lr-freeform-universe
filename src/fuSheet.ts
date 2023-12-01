import { intToWord } from "./utils/utils"

export const fuSheet = function(sheet: Sheet): ExtendedSheet {
    return {
        raw: function() { return sheet },
        find: function(id: string) { return sheet.get(id)},
        stringId: function() { return intToWord(sheet.getSheetId())},
        entryStates: {}
    }
}