import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Button} from "@storybook/react/demo";
import {Clock} from "../components/Clock/Clock";

export default {
    title: 'Clock',
    component: Clock
}



export const BaseAnalogExample = () => {

    return <Clock mode={"analog"}/>
}
export const BaseDigitalExample = () => {

    return <Clock mode={"digital"}/>
}