function generateRandomColor() {
 const existingBudgetLength = fetchData('budget') ?.length ?? 0;
 return `${existingBudgetLength * 34} 65% 50%`
}



// local storage

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const DeleteItem = ({key}) => {
    return localStorage.removeItem(key)
};

export const createBudget = ({name , amount }) => {
    const newItem = {
        id:crypto.randomUUID(),
        name: name , 
        amount : +amount,
        createdAt : Date.now(),
        color: generateRandomColor(),
    }

    const existingBudget= fetchData("budget") ?? []
    return localStorage.setItem("budget" , JSON.stringify([...existingBudget,newItem]))
}

export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
      style: "currency",
      currency: "INR"
    })
  }

  export const formatDate = (epoch) => new Date(epoch).toLocaleDateString();