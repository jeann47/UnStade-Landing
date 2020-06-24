import React, { useEffect, useRef, TextareaHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    Icon?: React.ComponentType;
}

const Textarea: React.FC<InputProps> = ({ name, Icon, ...rest }) => {
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
            <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
        </Container>
    );
};

export default Textarea;
