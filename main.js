const app = Vue.createApp(
    {
        template:`
        <h1>
        Hello from index {{ isDisplayed ? firstName + " " + lastName: 'None' }}
    </h1>
    <!-- <button v-on:click="onChangeName">
        Click me
    </button> -->
    <button @click="onChangeName">
        Change Name But shorter
    </button>
    <div class="model" v-if="showModelContent">
        <h1>Model Content</h1>
    </div>
        `,
        data() {
            return {
                firstName: 'John',
                lastName: 'Doe',
                isDisplayed: true,
                showModelContent: true,
            }
        },
        methods: {
            onChangeName() {
                this.firstName = 'Bob';
                this.lastName = 'Smith';
                this.showModelContent = !this.showModelContent;
            }
        }
    }
);

app.mount("#contact");
