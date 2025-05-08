import { SafeAreaView } from "react-native-safe-area-context";
import { Post } from "../../shared/ui/post";
import { StatusBar } from "expo-status-bar";

export default function MainPage(){
    return (
        <SafeAreaView style={{gap: 8}}> 
            <StatusBar style="auto"/>
            <Post 
            avatar='avatar1'
            username='X_AE_A-13' 
            text='Інколи найкращі ідеї народжуються в тиші 🌿  
            Природа, книга і спокій — усе, що потрібно, аби перезавантажитись.'
            hashtags='#відпочинок #натхнення #життя #природа #читання #спокій #гармонія'
            images={true}
            likes={120}
            views={890}
            ></Post>

            <Post 
            avatar='avatar2'
            username='X_AE_A-13' 
            text='буває такий настрій: просто лежиш і існуєш 😅           
            чай в одній руці, телефон в іншій, думки десь у      
            космосі 🌌 і знаєте шо? норм'
            hashtags='#вайб'
            likes={120}
            views={890}
            ></Post>
        </SafeAreaView>
    )
}