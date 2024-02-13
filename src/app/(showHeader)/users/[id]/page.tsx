"use client";
import axios from "axios";
import { useState, useEffect } from "react";
const UserDetails = ({ params }: { params: { id: string } }) => {
  // use
  return <div>UserDetails {params.id}</div>;
};

export default UserDetails;
