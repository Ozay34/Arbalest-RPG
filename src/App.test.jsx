import {describe, it, expect} from 'vitest'
import {render} from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
    it('should render logos', () => {
        const {getByTestId} = render(<App />)
        expect(getByTestId("logos")).not.toBeVisible()
    })
})