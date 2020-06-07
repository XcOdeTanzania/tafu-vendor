import Rect from 'react';
import { Text } from "react-native";
interface Props {
    icon: string,
    title: string,
    subtitle: string,
    cost: string,
    fn?: () => boolean
}

export const OrderItem: Rect.FC<Props> = ({ icon, title, subtitle, cost }) => {
    return (
        <div>
            <Text>{icon}</Text>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <Text>{cost}</Text>
        </div>
    );
}