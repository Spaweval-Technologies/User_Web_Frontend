import { SpaDetailContainer } from './index.styles';
import dynamic from 'next/dynamic';
import SpaDetailsContent from '@/components/SpaDetails';

const Breadcrumb = dynamic(() => import('@/components/Common/Breadcrumb'), {
  ssr: false,
});

type DetailProps = {
  pathName: string;
};

const Detail = ({ pathName }: DetailProps) => {
  return (
    <SpaDetailContainer>
      <Breadcrumb pathName={pathName} />
      <SpaDetailsContent />
    </SpaDetailContainer>
  );
};

export default Detail;
