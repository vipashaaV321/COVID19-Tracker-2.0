import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl, StylesProvider} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';
import CountUp from 'react-countup';
const CountryPicker=({handleCountryChange})=>{
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries])
    // console.log(fetchedCountries)
    return (
       
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value=''>Global data</option>
                    {fetchedCountries.map((country,i)=><option value={country} key={i}>{country}
                </option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;