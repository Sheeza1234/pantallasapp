import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '@/components/startscreen/startscreen'
import LoginScreen from '@/components/login'
import RegisterScreen from '@/components/login/registerscreen'
import LanguageSelect from '@/components/selection'
import AccountConfirmation from '@/components/confirmation'
import LogoScreen from '@/components/startscreen/startscreen'
import LoadingScreen from '@/components/startscreen/loading'
import SMSVerificationScreen from '@/components/verification'
import PinEntryScreen from '@/components/pinentry'
import InformationScreen from '@/components/information'
import Tutorials from '@/components/information/tutoriales'
import Resumen from '@/components/information/resumen'
import Adjustes from '@/components/information/adjustes'
import Perfil from '@/components/information/Perfil'
import VehicleInfoScreen from '@/components/homepagedetails/Vehicles'
import DocumentInfoScreen from '@/components/homepagedetails/documentation'
import LicenciaInfoScreen from '@/components/homepagedetails/documentation/licencia'
import IdentificationInfoScreen from '@/components/homepagedetails/documentation/identification'
import SeguoInfoScreen from '@/components/homepagedetails/documentation/seguro'
import TituloInfoScreen from '@/components/homepagedetails/documentation/titulo'
import DniInfoScreen from '@/components/homepagedetails/documentation/DNI'
import SeugroInfoScreen from '@/components/homepagedetails/seugro'
import PolizaInfoScreen from '@/components/homepagedetails/seugro/poliza'
import InfacionesInfoScreen from '@/components/homepagedetails/infraciones'
import PolizasInfoScreen from '@/components/homepagedetails/infraciones/poliza'
import NotificationInfoScreen from '@/components/homepagedetails/notification'
import ServiciosInfoScreen from '@/components/homepagedetails/servicios'
import AcieteInfoScreen from '@/components/homepagedetails/servicios/aciete'
import GastrosInfoScreen from '@/components/homepagedetails/gastos'
import CombustibleInfoScreen from '@/components/homepagedetails/gastos/combustible'
import ServicosInfoScreen from '@/components/homepagedetails/gastos/servicos'
import ServicosNoInfoScreen from '@/components/homepagedetails/gastos/servicosno'
import GastrosDetailInfoScreen from '@/components/homepagedetails/gastos/alfa'
import LocationInfoScreen from '@/components/homepagedetails/location'
import LvehicleInfoScreen from '@/components/homepagedetails/location/vehicles'
import RomeoInfoScreen from '@/components/homepagedetails/location/romeo'
import EstancioInfoScreen from '@/components/homepagedetails/location/estancio'
import CheckListInfoScreen from '@/components/homepagedetails/servicios/checklist'
import Remdio200InfoScreen from '@/components/homepagedetails/servicios/checklist/remdio200'

const { Navigator, Screen } = createStackNavigator()

const AppNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>


            <Screen name="SplashScreen" component={HomeScreen} />
            <Screen name="Language" component={LanguageSelect} />
            <Screen name="Login" component={LoginScreen} />
            <Screen name="Register" component={RegisterScreen} />
            <Screen name="Confirm" component={AccountConfirmation} />
            <Screen name="LogoScreen" component={LogoScreen} />
            <Screen name="LoadingScreen" component={LoadingScreen} />
            <Screen name="Verification" component={SMSVerificationScreen} />
            <Screen name="Pinentry" component={PinEntryScreen} />
            <Screen name="Information" component={InformationScreen} />
            <Screen name="Tutorials" component={Tutorials} />
            <Screen name="Resumen" component={Resumen} />
            <Screen name="Adjustes" component={Adjustes} />
            <Screen name="Perfil" component={Perfil} />
            <Screen name="Vehicle" component={VehicleInfoScreen} />
            <Screen name="Document" component={DocumentInfoScreen} />
            <Screen name="Licencia" component={LicenciaInfoScreen} />
            <Screen name="Identification" component={IdentificationInfoScreen} />
            <Screen name="Seugo" component={SeguoInfoScreen} />
            <Screen name="Titulo" component={TituloInfoScreen} />
            <Screen name="DNI" component={DniInfoScreen} />
            <Screen name="Seugro" component={SeugroInfoScreen} />
            <Screen name="Poliza" component={PolizaInfoScreen} />
            <Screen name="Infraciones" component={InfacionesInfoScreen} />
            <Screen name="Polizas" component={PolizasInfoScreen} />
            <Screen name="Notificaciones" component={NotificationInfoScreen} />
            <Screen name="Servicios" component={ServiciosInfoScreen} />
            <Screen name="Aciete" component={AcieteInfoScreen} />
            <Screen name="Gastos" component={GastrosInfoScreen} />
            <Screen name="Combustible" component={CombustibleInfoScreen} />
            <Screen name="Servicos" component={ServicosInfoScreen} />
            <Screen name='Servicosno' component={ServicosNoInfoScreen} />
            <Screen name="GastrosDetail" component={GastrosDetailInfoScreen} />
            <Screen name="Location" component={LocationInfoScreen} />
            <Screen name="Lvehicle" component={LvehicleInfoScreen} />
            <Screen name="Romeo" component={RomeoInfoScreen} />
            <Screen name="Estancio" component={EstancioInfoScreen} />
            <Screen name="CheckList" component={CheckListInfoScreen} />
            <Screen name="Remdio200" component={Remdio200InfoScreen}/>
        </Navigator>
    )
}

export default AppNavigator;
