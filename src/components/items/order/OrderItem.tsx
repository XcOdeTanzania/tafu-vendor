import Rect from 'react';
import { Text, View } from "react-native";
import styles from "./styles";
interface Props {
    icon: string,
    title: string,
    subtitle: string,
    cost: string,
    fn?: () => boolean
}

export const OrderItem: Rect.FC<Props> = ({ icon, title, subtitle, cost }) => {
    return (
        <View style={styles.container}>
            <Text>{icon}</Text>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <Text>{cost}</Text>
        </View>
    );
}