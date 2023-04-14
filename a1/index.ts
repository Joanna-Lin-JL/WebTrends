import { stringify } from "querystring";

const sum = (total: number, current: number): number => {
  return total + current;
}

/**Calculates the mean of the array
 * @param {number[]} array
 * @return {number}
 * */
export const arrayMean = (array: number[]): number | undefined => {
  if (array.length == 0) return undefined;
  return array.reduce(sum) / array.length;

}

type Apartment = {
  id: string;
  rent: number;
};

const filterApartments = (apt: Apartment, budget: number): boolean => {
  return apt.rent <= budget;
}

const getAptID = (apt: Apartment): string => { return apt.id; }

/**
 * takes in an array of Apartment 
 * returns the list of id of Apartment with rent less than or equal to budget
 * @param listings 
 * 
 * @param budget 
 * 
 * @return {string[]}
 */
export const affordableHousing = (
  listings: Apartment[],
  budget: number
): string[] => {
  let filtered = listings.filter(function (elt) {
    return filterApartments(elt, budget);
  })
  return filtered.map(getAptID);
};

export const filterEven = (elt: string): boolean => {
  if (elt.length % 2 == 0) {
    return elt.includes("even");
  }
  return true;
}

/**
 * takes in an optional string array
 * returns true if every even-length string contains 'even' as a substring.
 * 
 * return true if array is undefined
 * @param array 
 * 
 */
export const evenEven = (array?: string[]): boolean => {
  if (array == undefined) return true;
  return array.filter(filterEven).length == array.length;
};



type Doggo = {
  name: string;
  age: number;
  breed: string;
};

export const intoSentences = (dog: Doggo): string => {
  return dog.name + " is " + (Math.round(10 * (dog.age)) / 10.0).toFixed(1) +
    " years old and is a " + dog.breed;
}

/**
 * takes in an array of objects in the format 
 * {name: string, age: number, breed: string} and 
 * maps it to an array of sentences in the format 
 * "name is age years old, and is a breed."
 * @params array
 * @return {string[]}
 */
export const makeSentences = (array: Doggo[]): string[] => {
  return array.map(intoSentences);
};