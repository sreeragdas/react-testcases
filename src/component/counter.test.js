import { render, screen } from '@testing-library/react'
import Counter from './counter.jsx'


describe(Counter ,()=>{
it ('Counter display correct inital value' ,()=>{
const {getByTestId}=render(<Counter props={0}/>) // render the component first
 const countValue=getByTestId("count").textContent //get  element by id.

//  we need to countValue is equal to 0 which we are sending as props 
expect(countValue).toEqual(0)

})
})