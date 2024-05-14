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
          width={400}
          height={20}
        />
      </a>
    </div>
  );
};

export default _quadroWarehouse;
