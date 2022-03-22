const Content = () => {
  const renderContent = () => (
    <div className="mt-20 leading-9">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsam quaerat doloremque id officia doloribus, ipsum repudiandae sapiente quam debitis!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam mollitia saepe nihil. Nulla impedit consectetur totam quia! Reprehenderit neque quibusdam suscipit quae voluptatum, minus voluptatibus in culpa vitae sit atque incidunt quis numquam consequuntur voluptatem laboriosam maiores! Tempore laborum labore, animi eos hic molestiae reiciendis iusto omnis, nesciunt quam neque?</p>
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto py-10">
      {renderContent()}
      {renderContent()}
      {renderContent()}
      {renderContent()}
      {renderContent()}
      {renderContent()}
      {renderContent()}
      {renderContent()}
    </div>
  )
}

export default Content