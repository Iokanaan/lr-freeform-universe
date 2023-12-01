export const setupConditionEditEntry = function(entry: Component) {
    if(entry.find("condition").value() === "") {
        entry.find("condition").value(_(Tables.get("conditions").get("1").name))
    }

    entry.find("custom_condition").on("click", function() {
        if(entry.find("condition_predefined").visible()) {
            entry.find("condition_predefined").hide()
            entry.find("condition").show()
        } else {
            entry.find("condition_predefined").show()
            entry.find("condition").hide()
            entry.find("condition").value(_(entry.find("condition_predefined").text()))
        }
    })

    entry.find("condition_predefined").on("update", function(cmp) {
        entry.find("condition").value(_(cmp.text()))
    })
}
