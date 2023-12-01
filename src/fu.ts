import { fuSheet } from "./fuSheet"
import { setupConditionEditEntry } from "./condition/conditionRepeater"
import { globalSheets } from "./globals"
import { resultCallback } from "./roll/roll"
import { setupRepeater } from "./utils/repeaters"


// Gestion des résultats de dés
initRoll = function(result: DiceResult, callback: DiceResultCallback) {
    callback('DiceResult', resultCallback(result))
}

init = function(sheet) {
    if(sheet.id() === "main" || sheet.id() === "CharacterLight") {
        const s = fuSheet(sheet)
        globalSheets[sheet.getSheetId()] = s
        setupRepeater(s, "condition_repeater", setupConditionEditEntry, null, null)

        if(sheet.get("disadvantage").value() === undefined) {
            sheet.get("disadvantage").value(false)
        }

        if(sheet.get("disadvantage").value() === true) {
            sheet.get("disadvantage_btn").show()
            sheet.get("advantage_btn").hide()
        } else {
            sheet.get("disadvantage_btn").hide()
            sheet.get("advantage_btn").show()
        }

        sheet.get("disadvantage_btn").on("click", function(cmp) {
            cmp.hide()
            sheet.get("advantage_btn").show()
            sheet.get("disadvantage").value(false)
        })

        sheet.get("advantage_btn").on("click", function(cmp) {
            cmp.hide()
            sheet.get("disadvantage_btn").show()
            sheet.get("disadvantage").value(true)
        })

        sheet.get("roll").on("click", function() {
            const roll = new RollBuilder(sheet)
            if(sheet.get("roll_mode").value() === "ascending") {
                if(sheet.get("disadvantage").value() === true) {
                    roll.expression("keepl(" + sheet.get("n_dice").value() + "d6)[alt]")
                } else {
                    roll.expression("keeph(" + sheet.get("n_dice").value() + "d6)[alt]")
                }
            } else {
                if(sheet.get("disadvantage").value() === true) {
                    roll.expression(sheet.get("n_dice").value() + "d6[disadvantage]")
                } else {
                    roll.expression(sheet.get("n_dice").value() + "d6")
                }
            }

            roll.visibility(sheet.get("visibility").value())
                .roll()
        })


    }
}

getCriticalHits = function(result) {
    return {
        "20": {
            "critical": [1],
            "fumble": [20],
        },
        "10": {
            "critical": [1],
            "fumble": [10]
        },
        "12": {
            "critical": [1],
            "fumble": [12]
        }
    }
}