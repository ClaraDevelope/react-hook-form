import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'
const Form = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    userName: '',
    email: '',
    password: '',
    options: { work: false, study: false }
  })

  const onSubmit = (formData) => {
    console.log(formData)
  }
  const password = watch('password')
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <div className='userName-field'>
        <label htmlFor='userName'>😎 Nombre de usuario:</label>
        <input
          className={formState.errors.userName ? 'inputError' : ''}
          type='text'
          {...register('userName', {
            required: {
              value: true,
              message: 'Necesitas un nombre de usuario para continuar'
            },
            minLength: {
              value: 2,
              message:
                'Se necesitan al menos 3 caracteres en el nombre de usuario'
            }
          })}
        />

        {formState.errors.userName ? (
          <p className='error'>{formState.errors.userName.message}</p>
        ) : null}
      </div>
      <div className='email-field'>
        <label htmlFor='email'>✉️ Email:</label>
        <input
          id='email'
          type='email'
          {...register('email', {
            required: {
              value: true,
              message: 'email no válido'
            },
            minLength: {
              value: 8,
              message: 'El email es demasiado corto'
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: 'Formato de correo electrónico no válido'
            }
          })}
        />
        {formState.errors.email ? (
          <p className='error'>{formState.errors.email.message}</p>
        ) : null}
      </div>

      <div className='password-field'>
        <label htmlFor='password'>🗝️ Contraseña:</label>
        <input
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'Tienes que poner una contraseña'
            },
            minLength: {
              value: 8,
              message: 'La contraseña es demasiado corta'
            },
            pattern: {
              value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_!@#$%^&*])/,
              message:
                'La contraseña debe incluir minúsculas, mayúsculas, números y símbolos'
            }
          })}
        />
        {formState.errors.password ? (
          <p className='error'>{formState.errors.password.message}</p>
        ) : null}
      </div>

      {!formState.errors.password && password ? (
        <>
          <div className='options'>
            <h4>Escoge una o ambas opciones:</h4>
            <div className='flex'>
              <div>
                <label htmlFor='work'> Estudio</label>
                <input type='checkbox' {...register('work')} />
              </div>
              <div>
                <label htmlFor='study'>Trabajo</label>
                <input type='checkbox' {...register('study')} />
              </div>
            </div>
          </div>
        </>
      ) : null}

      <button>Enviar</button>
    </form>
  )
}

export default Form
