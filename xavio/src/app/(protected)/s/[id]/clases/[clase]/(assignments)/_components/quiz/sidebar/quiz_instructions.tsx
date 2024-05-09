import Link from 'next/link'
import React from 'react'

type Props = {
    params: {
      id: string;
      clase: string;
      quiz: string;
    };
    quizDescription: {
      topic: string,
      description: string,
      lastUpdated: string,
      contributor: string,
    };
  };

function QuizInstructions({ params , quizDescription}: Props) {
  return (
    <div>
        <div className="space-y-4">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis suscipit laborum a minima similique voluptatem debitis ipsam voluptatum unde? Voluptatibus deleniti non consequatur hic obcaecati quod minima nam optio neque debitis nostrum adipisci dolores impedit dicta, odit eius quas voluptates dignissimos totam nesciunt nisi ipsum eveniet doloremque? Sit quidem sequi repudiandae ipsum, soluta modi suscipit architecto officiis quia. Corporis, nobis maxime fugit quas recusandae numquam omnis sequi aliquam mollitia eos consequatur deserunt explicabo minima magnam amet sint officia possimus perspiciatis minus! Tempora sed blanditiis officiis? Officia ad quia eum molestias facere delectus. Voluptas consequatur asperiores culpa aspernatur nemo perferendis odio ab assumenda, dolorum veritatis nihil quo molestias cum iure! Pariatur quisquam nesciunt rerum aut id mollitia officiis nobis ratione minus omnis, voluptatibus, nemo est recusandae quam perferendis vero aliquid praesentium debitis iste! Modi cum deserunt dolores voluptatum ut illum dicta? Eaque ea delectus tempore non doloribus excepturi dolorem. Eum, quisquam. Maiores vitae rerum praesentium rem, dolores ut quidem amet. Unde placeat quod explicabo dolor, corporis itaque rerum doloremque consequuntur iure ratione totam illo dignissimos sequi dolorum illum facilis! Autem, illo consequatur natus molestias maxime in culpa iusto aspernatur, cumque dignissimos eius impedit odio. Dolorem, nemo! Ipsa quis quaerat repellat quod nulla doloribus illum, optio, eligendi sit earum cum a ab ipsum dolorum rerum aperiam eius accusamus, tempora minima fuga vel ea. Sapiente odit ab fugiat dolor labore, fugit nisi aspernatur enim ex repudiandae sit dolore vel. Amet corporis architecto beatae aliquid, odit molestiae fuga ut praesentium, doloribus autem adipisci ex eaque? Numquam voluptates earum quibusdam beatae odit quidem tempore eaque, ea ipsum, doloremque praesentium aut pariatur tenetur iure consectetur nihil debitis placeat illo doloribus dignissimos temporibus. Fugit, esse quisquam iure asperiores mollitia voluptas illum quos possimus eius maiores doloremque aut neque quibusdam ad perspiciatis, culpa exercitationem iste repudiandae sapiente enim? Ab qui quisquam tenetur cupiditate placeat dolor amet omnis maxime obcaecati eos laborum, enim in sunt vero! Delectus ea accusamus alias. Dolores, odio debitis hic vitae tempore non vel ab nobis alias rerum nulla commodi saepe blanditiis. Praesentium impedit eum ab sint officia, tempore delectus! Tenetur eos nesciunt deleniti nemo nobis commodi, consectetur, excepturi, rerum consequatur voluptatem officiis repellat voluptate deserunt recusandae temporibus a aperiam ea earum mollitia! Reiciendis, tempore! Atque dolorum dolor aliquid quaerat, qui modi corrupti perspiciatis vitae quo. Ex omnis quaerat voluptates accusamus cumque ipsa perferendis nobis recusandae, similique impedit eaque, earum minima, quam commodi numquam assumenda vero? Iste nihil suscipit obcaecati quas repudiandae minima laboriosam nulla facere consequuntur vel atque amet illum quibusdam error nam molestias, quam soluta quisquam voluptate iure. Iure saepe enim consequuntur distinctio amet. Eligendi perspiciatis officia error, vero totam quidem, cumque debitis consequuntur odit dolore nobis officiis unde. Quisquam quia earum nemo itaque? Nihil sunt eum quo eius, reprehenderit rerum eaque odio voluptatem. Porro maxime nobis delectus in distinctio soluta suscipit similique, veniam nemo rerum reprehenderit aliquam dignissimos aut vero nam esse blanditiis atque quam dolor? Illo aliquam aspernatur accusantium quasi perspiciatis nisi fugit maiores voluptate quos ipsa, harum cumque. Optio.</p>
        </div>
    </div>
  )
}

export default QuizInstructions