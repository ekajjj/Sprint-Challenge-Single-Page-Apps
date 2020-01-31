import React, { useState } from "react";
import {Form, Input, Button} from 'reactstrap';

export default function SearchForm({search, handleChange, handleSubmit}) {
 
  return (
    <section className="search-form">
     // Add a search form here
     <Form onSubmit={handleSubmit}>
        <Input
          name='search'
          type='search'
          search={search}
          onChange={handleChange}
        />
      <Button>submit</Button>
      </Form>
    </section>
  );
}
