import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useRouteByRoleAndDepartment = () => {
  const navigate = useNavigate();

  const routeUser = useCallback((role, department) => {
    let path = '/';

    if (role === 'superuser') {
      path = '/admin/dashboard';
    } else if (role === 'manager') {
      switch (department) {
        case 'Sales':
          path = '/manager/sales';
          break;
        case 'Analysis':
          path = '/manager/analysis';
          break;
        case 'Services':
          path = '/manager/services';
          break;
        default:
          path = '/manager/overview';
      }
    } else if (role === 'player') {
      if (department === 'Players') {
        path = '/player/profile';
      } else {
        path = '/player/dashboard';
      }
    } else if (role === 'junior') {
      path = '/staff/dashboard';
    } else if (role === 'director') {
      switch (department) {
        case 'Donors':
          path = '/director/donors';
          break;
        case 'Management':
          path = '/director/management';
          break;
        default:
          path = '/director/overview';
      }
    } else {
      path = '/unauthorized';
    }

    navigate(path);
  }, [navigate]);

  return routeUser;
};

export default useRouteByRoleAndDepartment;
