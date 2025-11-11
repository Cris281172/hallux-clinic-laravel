import { useState } from 'react';
import { Input } from '../../../ui/input.js';
import { Slider } from '../../../ui/slider.js';

const PriceFilter = () => {
    const [value, setValue] = useState([25, 75]);
    return (
        <>
            <Slider value={value} onValueChange={setValue} max={100} step={1} />
            <div className={'mt-5 flex gap-2'}>
                <Input value={value[0]} onChange={(e) => setValue((prevState) => [e.target.value, prevState[1]])} />
                <Input value={value[1]} onChange={(e) => setValue((prevState) => [prevState[0], e.target.value])} />
            </div>
        </>
    );
};

export default PriceFilter;
