import React from 'react';
import Image from 'next/image'


interface _quadroWarehouseProps {}

const _quadroWarehouse: React.FC<_quadroWarehouseProps> = () => {
  return (
    <div id='warehouseImage'>
      <a 
        href="https://github.com/iPonzu/Warehouse-Maganement"
        title='RepositoryImageWarehouse'
        target='_blank'
      >
        <Image
          src='/images/warehousePrint.png'
          alt='RepositoryImageWarehouse'
          width={500}
          height={50}
        />
      </a>
    </div>
  );
};

export default _quadroWarehouse;
