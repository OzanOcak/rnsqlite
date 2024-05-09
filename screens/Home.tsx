import { View, Text } from "react-native";
import React from "react";
import { Category, Transaction } from "../types";
import { useSQLiteContext } from "expo-sqlite";

const Home = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  const db = useSQLiteContext();

  React.useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData();
    });
  }, [db]);

  async function getData() {
    const result = await db.getAllAsync<Transaction>(
      `SELECT * FROM Transactions ORDER BY date DESC;`
    );
    console.log(result);
  }
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
