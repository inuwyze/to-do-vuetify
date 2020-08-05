<template>
    <nav>
        <v-app-bar text app>
             <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
                
            </v-app-bar-nav-icon>
            <v-toolbar-title class='text-uppercase grey--text'>
                <span class="font-weight-light">todo</span>
                <span>ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color='grey'>
                <span>sign out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>


           
        </v-app-bar>

        <v-navigation-drawer v-model='drawer' app class='indigo'>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to='link.route'>
                    <v-list-item-action>
                        <v-icon class="white--text">mdi-{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>


export default {
data(){
    return{
        drawer:true,
        links:[
            { icon: 'view-dashboard', text: 'Dashboard', route: '/' },
            { icon: 'folder', text: 'My Projects', route: '/projects' },
            { icon: 'account', text: 'Team', route: '/team' }, 
        ]
    }
}

}
</script>
