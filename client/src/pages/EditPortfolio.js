import React, {useState} from "react";
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_PORTFOLIO } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import {StyleOne, StyleTwo} from "../components/PortfolioStyles";

const EditPortfolio = () => {
    const {loading, data} = useQuery(QUERY_ME);
    const profile = data?.me || {};

    const [formState, setFormState] = useState({})
}