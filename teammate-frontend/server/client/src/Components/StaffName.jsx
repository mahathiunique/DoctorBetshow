import { useEffect, useState } from "react";
import axios from "axios";

function StaffName({ userId }) {
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/staff/${userId}`)
      .then((res) => {
        setStaff(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching staff:", err);
        setStaff(null);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (!staff) return <p>Staff not found.</p>;

  return (
    <div>
      <h3>Name: {staff.name}</h3>
      <p>Role: {staff.role}</p>
    </div>
  );
}

export default StaffName;
