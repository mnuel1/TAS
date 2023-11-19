import React, { useEffect,useState } from 'react';
import PendingTable from '@/Components/PendingTable';
const AppointmentsList = () => {
    const [pendingAppointments, setPendingAppointments] = useState([]);
    const [error, setError] = useState(null);
  
    const fetchPendingAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments/pending');
        setPendingAppointments(response.data);
      } catch (error) {
        console.error('Error fetching pending appointments:', error);
        setError('Error fetching pending appointments');
      }
    };
  
    const approveAppointment = async (userId,vehicleId) => {
      try {
        await axios.put(`/api/appointments/${userId}/${vehicleId}/approve`);
        setPendingAppointments(prevAppointments =>
          prevAppointments.filter(appointment => appointment.userId !== userId)
        );
      } catch (error) {
        console.error('Error approving appointment:', error);
        setError('Error approving appointment');
      }
      window.location.reload();
    };
  
    const rejectAppointment = async (userId,vehicleId) => {
      try {
        await axios.put(`/api/appointments/${userId}/${vehicleId}/reject`);
        setPendingAppointments(prevAppointments =>
          prevAppointments.filter(appointment => appointment.userId !== userId)
        );
      } catch (error) {
        console.error('Error rejecting appointment:', error);
        setError('Error rejecting appointment');
      }
      window.location.reload();
    };
  
    useEffect(() => {
      fetchPendingAppointments();
    }, []);

    console.log(pendingAppointments);

  return (
    <div className='p-4'>   
      <h3 className="text-lg font-semibold mb-4">List of Appointments</h3>
      
      
        <PendingTable 
            appointments={pendingAppointments}
            onApprove={approveAppointment}
            onReject={rejectAppointment}
        />

      
    </div>
  );
};

export default AppointmentsList;