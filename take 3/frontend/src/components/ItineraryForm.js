import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ItineraryForm = ({ onSubmit, initialValues }) => {
  const [submitting, setSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .min(2, 'Title must be at least 2 characters'),
    description: Yup.string()
      .required('Description is required'),
    flights: Yup.array()
      .of(
        Yup.object().shape({
          flight_number: Yup.string().required('Flight number is required'),
          departure_airport: Yup.string().required('Departure airport is required'),
          arrival_airport: Yup.string().required('Arrival airport is required'),
          departure_time: Yup.date().required('Departure time is required'),
          arrival_time: Yup.date().required('Arrival time is required')
        })
      )
  });

  return (
    <div>
      <h2>Create/Edit Itinerary</h2>
      <Formik
        initialValues={initialValues || { title: '', description: '', flights: [] }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          onSubmit(values).finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" component="div" />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <Field name="description" as="textarea" />
              <ErrorMessage name="description" component="div" />
            </div>

            <div>
              <h3>Flights</h3>
              {values.flights.map((flight, index) => (
                <div key={index}>
                  <label htmlFor={`flights.${index}.flight_number`}>Flight Number</label>
                  <Field name={`flights.${index}.flight_number`} type="text" />
                  <ErrorMessage name={`flights.${index}.flight_number`} component="div" />

                  {/* Repeat for other flight fields */}
                </div>
              ))}
              <button
                type="button"
                onClick={() => setFieldValue('flights', values.flights.concat([{ flight_number: '', departure_airport: '', arrival_airport: '', departure_time: '', arrival_time: '' }]))}
              >
                Add Flight
              </button>
            </div>

            <button type="submit" disabled={isSubmitting || submitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ItineraryForm;
