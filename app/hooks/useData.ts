import { DataContext } from './../providers/DataProvider';
import { useContext } from 'react';

export const useData = () => useContext(DataContext)