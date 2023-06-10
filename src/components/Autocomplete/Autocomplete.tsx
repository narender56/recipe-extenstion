import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

import styles from './Autocomplete.module.css';

export interface AutocompleteItem {
    id: string;
    name: string;
}

interface AutocompleteProps {
    items: AutocompleteItem[];
    onSelect: (item: AutocompleteItem) => void;
    onClear: () => void;
}

export default function Autocomplete({ items, onSelect, onClear }: AutocompleteProps) {
    return (
        <div className={styles['search-container']}>
            <ReactSearchAutocomplete
                inputDebounce={200}
                items={items}
                onSelect={onSelect}
                onClear={onClear}
                className="autocomplete"
                placeholder="Search cousine"
            />
        </div>
    );
}