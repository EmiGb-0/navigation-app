import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer);
    };

    return (
        <SafeAreaView>
            <View className=' mx-2.5'>


                <CustomButton
                    color='primary'
                    variant='contained'
                    className='mb-2'
                    onPress={() => router.push('/products')}
                >
                    Productos
                </CustomButton>

                <CustomButton
                    color='secondary'
                    className='mb-2'
                    onPress={() => router.push('/profile')}
                >
                    Profile
                </CustomButton>

                <CustomButton
                    color='tertiary'
                    className='mb-2'
                    onPress={() => router.push('/settings')}
                >
                    Settings
                </CustomButton>

                <Link href={'/products'} asChild>
                    <CustomButton
                        color='primary'
                        variant='text-only'
                        className='mb-10'

                    >
                        Productos
                    </CustomButton>
                </Link>

                <CustomButton
                    onPress={onToggleDrawer}
                >
                    Abrir Menú
                </CustomButton>
                {/* <Text>HomeScreen</Text>

                <Link className='mb-5' href='/products'>
                    Productos{' '}
                </Link>
                <Link className='mb-5' href='/profile'>
                    Perfil{' '}
                </Link>
                <Link className='mb-5' href='/settings'>
                    Configuración{' '}
                </Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen