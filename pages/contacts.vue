<script setup lang="ts">
const email = 'contact@mail.alifyasa.dev'
const emailSubject = ref('')
const emailBody = ref('')
function openEmailClient() {
    const link = `mailto:${email}?subject=${emailSubject.value}&body=${emailBody.value}`
    console.log(link)
    window.open(link, '_blank')
}
function resetEmailForms() {
    emailSubject.value = ''
    emailBody.value = ''
}
</script>
<template>
    <BaseH1>Contacts</BaseH1>
    <fieldset>
        <div class="flex flex-col mb-8">
            <label for="subject">
                <BaseH2>Subject</BaseH2>
            </label>
            <input type="text" id="subject" name="subject" :value="emailSubject"
                class="p-2 font-sans"
                placeholder="Enter subject here"
                @input="e => emailSubject = (e.target as HTMLInputElement).value" tabindex="1">
            <label for="message">
                <BaseH2>Message</BaseH2>
            </label>
            <textarea type="text" id="message" name="message" :value="emailBody"
                placeholder="Type your message here"
                class="resize-none p-2 font-sans"
                @input="e => emailBody = (e.target as HTMLInputElement).value" tabindex="2" rows="5"></textarea>
        </div>
        <button class="px-4 py-2 bg-rust text-beige rounded-l-lg" tabindex="3" @click="openEmailClient">Send</button>
        <button class="px-4 py-2 bg-rust text-beige rounded-r-lg" tabindex="4" @click="resetEmailForms">Reset</button>
    </fieldset>
</template>