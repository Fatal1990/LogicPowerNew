// Form.vue (parent)

<MyInput v-model="form.name"/>


// MyInput.vue (child)

{{ value }}

this.$emit('input', 'newValue');