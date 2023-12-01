import { max, min } from "../utils/utils"

export const resultCallback = function(result: DiceResult) {
    return function(sheet: Sheet<unknown>) {
        const diceMapping: Record<number, number> = {
            1: 1,
            2: 4,
            3: 2,
            4: 5,
            5: 3,
            6: 6
        }
        let res = result.total
        if(result.allTags.indexOf("alt") === -1) {
          const mappedResult: number[] = []
          for(let i=0; i<result.all.length;i++) {
             mappedResult.push(diceMapping[result.all[i].value])
          }
          if(result.allTags.indexOf("disadvantage") !== -1) {
            res = min(mappedResult)
          } else {
            res = max(mappedResult)
          }
        }
        switch(res) {
          case 6:
            sheet.get("result").text(_("Oui, et..."))
            break
          case 5:
            sheet.get("result").text(_("Oui"))
            break
          case 4:
            sheet.get("result").text(_("Oui, mais..."))
            break
          case 3:
            sheet.get("result").text(_("Non, mais..."))
            break
          case 2:
            sheet.get("result").text(_("Non"))
            break
          case 1:
            sheet.get("result").text(_("Non, et..."))
            break
          default:
        }
    }
}