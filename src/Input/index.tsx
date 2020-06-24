import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    Icon?: React.ComponentType;
}

const Input: React.FC<InputProps> = ({ name, Icon, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            {Icon && <Icon />}
            <input ref={inputRef} defaultValue={defaultValue} {...rest} />
        </Container>
    );
};

export default Input;
