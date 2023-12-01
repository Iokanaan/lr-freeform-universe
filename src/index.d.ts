//@ts-check

declare global { 

    interface ExtendedSheet<T = unknown> {
        raw(): Sheet<T>,
        find(id: string): Component<unknown> | ChoiceComponent<unknown>,
        stringId(): string,
        entryStates: Record<string, Record<string, RepeaterState | undefined>>
    }

    type RepeaterState = "EDIT" | "VIEW"
} 

export {}
