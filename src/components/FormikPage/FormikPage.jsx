import { ErrorMessage, Field, Form, Formik } from 'formik';



const FormikPage = (props) => { 
  return (
    <div>
      FormikPage
      <Formik
       initialValues={{ email: '', password: '', username: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (!values.password){
           errors.password = 'password required';
         } else if (!values.username){
            errors.username = 'username required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <br/><br/>
           <Field type="email" name="email" />
           <br/><br/>
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <br/><br/>
           <ErrorMessage name="password" component="div" />
           <Field type="username" name="username" placeholder="gffrg" />
           <br/><br/>
           <ErrorMessage name="username" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default FormikPage;