import { NextPage } from "next";
import React, { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { categoryOptionsList } from "../public/data/categoryOptionsList";

const MainAppBarSearch: NextPage = () => {
    /**
     * @keywords words entered into search bar textfield.
     * @category selected category in search bar.
     * @radius selected distance in search bar.
     */
    const [keywords, setKeywords] = useState('');
    const [category, setCategory] = useState({ title: '', firstLetter: '' });
    const [radius, setRadius] = useState('');

    const handleKeywordsChange = (event: any) => {
        setKeywords(event.target.value);
    };

    const handleCategoryChange = (event: any) => {
        if (event.target.innerText) {
            setCategory({ title: event.target.innerText, firstLetter: event.target.innerText[0] });
        }
    };

    const handleRadiusChange = (event: SelectChangeEvent) => {
        setRadius(event.target.value);
    };

    /**
     * @categoryOptions used for autocomplete category options.
     * @returns array consisting of first characters of categories.
     */
    const categoryOptions = categoryOptionsList.map(
        (categoryOption) => {
            const firstLetter = categoryOption.title[0].toUpperCase();
            return {
                firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
                ...categoryOption,
            };
        }
    );

    /**
     * @testInput function for checking input values in searchbar.
     * @returns logging for inputs in console.
     */
    const testInput = () => {
        const { title } = category;
        if (keywords && title && radius) {
            console.log('keywords: ', keywords, ', category: ', title, ', radius: ', radius);
            return
        }
        if (keywords && title) {
            console.log('keywords: ', keywords, ', category: ', title);
            return
        }
        if (keywords && radius) {
            console.log('keywords: ', keywords, ', radius: ', radius);
            return
        }
        if (keywords) {
            console.log('keywords: ', keywords);
            return
        }
        if (title) {
            console.log('category: ', title);
            return
        }
        if (radius) {
            console.log('radius: ', radius);
            return
        }
        console.log('no search input found!');
    };

    return (
        <>
            <TextField
                label="Search for ..."
                variant="outlined"
                onChange={handleKeywordsChange}
                sx={{
                    backgroundColor: "whitesmoke",
                    borderRadius: 1,
                    my: 1,
                    width: 200,
                    display: {
                        xs: 'none',
                        lg: 'block'
                    },
                }}
            />

            <Autocomplete
                id="category-autocomplete"
                options={categoryOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(categoryOptions) => categoryOptions.firstLetter}
                getOptionLabel={(categoryOptions) => categoryOptions.title}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                renderInput={(params) => <TextField {...params} label="in categories" />}
                onChange={handleCategoryChange}
                sx={{
                    backgroundColor: "whitesmoke",
                    borderRadius: 1,
                    my: 1,
                    width: 200,
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            />

            <FormControl
                sx={{
                    backgroundColor: "whitesmoke",
                    borderRadius: 1,
                    my: 1,
                    width: 120,
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            >
                <InputLabel id="radius-selector-label">Radius</InputLabel>
                <Select
                    labelId="radius-selector"
                    id="radius-selector"
                    value={radius}
                    label="Radius"
                    onChange={handleRadiusChange}
                    sx={{ width: 120 }}
                >
                    <MenuItem value={3}>3km</MenuItem>
                    <MenuItem value={5}>5km</MenuItem>
                    <MenuItem value={15}>15km</MenuItem>
                    <MenuItem value={25}>25km</MenuItem>
                    <MenuItem value={50}>50km</MenuItem>
                </Select>
            </FormControl>

            <Button
                variant="contained"
                size="large"
                onClick={testInput}
                sx={{
                    height: 54,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            >
                Search
            </Button>
        </>
    )
}

export default MainAppBarSearch;
