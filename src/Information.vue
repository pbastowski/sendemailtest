<template>
    <v-layout justify-center>
        <v-flex
            xs12
            sm10
            md8
            lg6
        >

            <v-card>
                <v-card-title>
                    <h2 style="margin-left: auto; margin-right: auto;">Important Information form</h2>
                </v-card-title>

                <v-divider/>

                <v-form
                    ref="form"
                    v-model="valid"
                >
                    <v-card-text>

                        <v-layout
                            align-center
                        >

                            <v-text-field
                                v-model="data.to"
                                label="To:"
                                flat
                                :rules="[ rules.required, rules.email ]"
                            />
                            <v-tooltip bottom>
                                <span
                                    class="grey--text"
                                    slot="activator"
                                >
                                    <span
                                        class="ml-3 mr-3"
                                        @click="showCc=!showCc"
                                    >Cc</span>
                                    <span
                                        @click="showBcc=!showBcc"
                                    >Bcc</span>
                                </span>
                                Click <b>Cc</b> or <b>Bcc</b> to show additional inputs
                            </v-tooltip>
                        </v-layout>

                        <v-text-field
                            v-model="data.cc"
                            label="Cc:"
                            v-if="showCc"
                            :rules="[ rules.email ]"
                        />

                        <v-text-field
                            v-model="data.bcc"
                            label="Bcc:"
                            v-if="showBcc"
                            :rules="[ rules.email ]"
                        />

                        <v-text-field
                            v-model="data.information"
                            box
                            flat
                            solo
                            class="mb-2 mt-3"
                            label="Enter here the information you want to send"
                            maxlength="500"
                            multi-line
                            single-line
                            auto-grow
                            counter
                            rows="10"
                            :rules="[ rules.required ]"
                        />

                    </v-card-text>

                </v-form>

                <v-divider/>

                <v-card-media>
                    <v-layout justify-space-between>

                        <v-tooltip bottom>
                            <v-btn
                                slot="activator"
                                flat
                                @click="$refs.form.reset()"
                            >Reset
                            </v-btn>
                            Clears all the data in the form
                        </v-tooltip>

                        <v-tooltip
                            bottom
                            v-bind="{ color: !valid ? 'red' : undefined }"
                        >
                            <v-btn
                                slot="activator"
                                flat
                                color="primary"
                                :disabled="!valid"
                                @click="sendData"
                            >Send
                            </v-btn>
                            <span v-if="valid">Click to submit your form</span>
                            <span v-else>Some fields are not valid, please check them</span>
                        </v-tooltip>

                    </v-layout>
                </v-card-media>

            </v-card>

        </v-flex>

        <v-snackbar v-model="sendSuccess" color="success" top right>
            Data was sent successfully.
        </v-snackbar>

        <v-snackbar v-model="sendError" color="error" top right>
            There was an error sending your data. Please try again.
        </v-snackbar>

    </v-layout>
</template>

<script>
import * as validators from 'vuelidate/dist/validators.min'
import axios from 'axios'

export default {
    props: {},
    data() {
        return {
            showCc: false,
            showBcc: false,
            valid: false,
            sendSuccess: false,
            sendError: false,

            data: {
                to: '',
                cc: '',
                bcc: '',
                information: ''
            },

            rules: {
                required: v => !!v || 'This is a required field',

                email: (v = '') => {
                    let valid = v
                        .split(';')
                        .every(email => !!validators.email(email.trim()))
                    return valid || 'Please enter a valid email address'
                }
            }
        }
    },

    methods: {
        sendData() {
            console.log('DATA:', JSON.stringify(this.data, null, 4))

            // Post data to backend API, which will send the email
            // axios
            //     .post('/api/sendmail', this.data)
            //     .then(result => this.announceSuccess())
            //     .catch((err = this.announceError()))

            setTimeout(() => {
                if (Math.random() > 0.5) this.announceSuccess()
                else this.announceError()
            }, 500)
        },

        announceSuccess() {
            this.sendSuccess = true
            this.sendError = false
        },

        announceError() {
            this.sendError = true
            this.sendSuccess = false
        }
    }
}
</script>
