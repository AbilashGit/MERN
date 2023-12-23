import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link, Prompt} from 'react-router-dom';
import Button  from 'react-bootstrap/Button'



const Additemform = ({ values,dirty, errors, touched, isSubmitting }) => (
    <div>
         <br></br><br></br><br></br>
        <h1>Add Issue</h1>
        <br></br><br></br>
        <Form>
            <div>Item Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
            <Field type="text" name="title" placeholder="title"/>
            {touched.title && errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
            </div><br></br>
            <div>Item Desription&nbsp;:&nbsp;
                <Field type="text" name="isd" placeholder="Isd"/>
                {touched.isd && errors.isd && <span style={{ color: 'red' }}>{errors.isd}</span>}<br/><br/>
            </div>
            <div>
                    category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                <Field as="select" name="category">
                   <option value="chains">Chain</option>
                   <option value="necklace">Necklace</option>
                   <option value="bangles">Bangles</option>
                   <option value="antiques">Antiques</option>
                   <option value="earrings">Ear Rings</option>
                   <option value="rings">Rings</option>
                   <option value="silver">Silver</option>
                   </Field>
                 <br/><br/>
            </div>
            <div>
            Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
            <Field type="number" name="price" placeholder="price"/>
            {touched.price && errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
            </div><br></br>
            <div>
            Image Link&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
            <Field type="text" name="image" placeholder="image"/>
            {touched.image && errors.image && <span style={{ color: 'red' }}>{errors.image}</span>}
            </div>  
            <br/>
            <Prompt when={dirty} message="Are you sure?"/>
            &nbsp; <Link className="btnLink" to="/IssuesComponent">Back</Link>&nbsp;&nbsp;&nbsp;
            <Button type="submit">Submit</Button>
        </Form>
    </div>
)
const FormikIssuesForm = withFormik({
    mapPropsToValues({title,isd,category,price,description,image}) {
        return {
            title: title || '',
            isd: isd || '',
            category: category || 'rings',
            price: price || 0 ,
            description: description || '',
            image:image || ''
        }
    },
    validationSchema: Yup.object().shape({
        title:Yup.string().required('This Field is required'),
        isd: Yup.string().min(5, 'Description must be at least 5 characters in length').required('This Field is required'),
        price:Yup.string().required("Price field is required"),
        image:Yup.string().required("Image field is required")
    }),
    handleSubmit(values, { resetForm, setSubmitting,props, setErrors }) {
        setTimeout(() => {
            if (values.title === 'Error') {
                setErrors({ title: 'You cannot add Error as an Issue' })
            } else {
                resetForm()
            props.onSave(values);
          
            }
			setSubmitting(false);
        });
    }
})(Additemform)


export default FormikIssuesForm