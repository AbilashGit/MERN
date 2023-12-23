import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const EmployeeForm = ({ values, errors, touched, isSubmitting }) => (
    <div>
        <h1>Employee Form</h1>
        <Form>
            <div>
                <Field type="text" name="empname" placeholder="Empname"/>
                {touched.empname && errors.empname && <span style={{ color: 'red' }}>{errors.empname}</span>}
            </div>
            <div>
                <label>
                    <Field type="checkbox" name="manager" checked={values.manager} />
                    Manager
                </label>
            </div>
            <br/>
            <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
)

const FormikEmployeeForm = withFormik({
    mapPropsToValues({empname, manager}) {
        return {
            empname: empname || '',
            manager: manager || false
        }
    },
    validationSchema: Yup.object().shape({
        empname: Yup.string().min(3, 'Name must be at least 3 characters in length').required('Name is required')
    }),
    handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
        console.log(values);
        setTimeout(() => {
            if (values.empname === 'God') {
                setErrors({ empname: 'You cannot add God as an employee' })
            } else {
                resetForm()
                alert(JSON.stringify(values));
            }
			setSubmitting(false);
        });
    }
})(EmployeeForm)

export default FormikEmployeeForm
