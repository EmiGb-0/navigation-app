
import React from "react";
import { Pressable, Text, View, type PressableProps } from "react-native";

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';

    variant?: 'text-only' | 'contained'
}

const CustomButton = React.forwardRef(
    ({ children, color = 'primary', onPress, onLongPress, variant = 'contained', className }: Props, ref: React.Ref<View>) => {
        const btnColor = {
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            tertiary: 'bg-tertiary'
        }[color]
        const textColor = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary'
        }[color]

        if (variant === 'text-only') {
            return (
                <Pressable
                    ref={ref}
                    className={`p-3 ${className}`}
                    onPress={onPress}
                    onLongPress={onLongPress}
                >
                    <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
                </Pressable>
            )
        }

        return (
            <Pressable
                ref={ref}
                className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text className="text-white text-center font-work-medium">{children}</Text>
            </Pressable>
        )
    }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton