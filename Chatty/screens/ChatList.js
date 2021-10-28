import React from "react";
import { Text ,View} from "react-native";
import { List,Avatar,Divider,FAB,Portal,Dialog,Button } from "react-native-paper";

const ChatList = () =>{
    return(
        <View style={{flex:1}}>
            <List.Item
                title="User Name"
                description="Hi, I will be waiting for you"
                left={() => <Avatar.Text label="UN" size={56}/>}
            />
            <Divider inset/> 
            <Portal>
                <Dialog visible={true}>
                    <Dialog.Title>New Chat</Dialog.Title>
                    <Dialog.Content>
                    
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button>Done</Button>
                    </Dialog.Actions>

                </Dialog>
            </Portal>
            <FAB icon="plus" style={{position:'absolute',bottom:16,right:16}}/>
        </View>
    )
}

export default ChatList;