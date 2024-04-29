using Task1;

namespace Task2
{
    public class InstanceService
    {
        //Антипаттерн "Ограниченая конструкция"
        public IEnumerable<TEntity> GetInstances<TEntity>() where TEntity : class
        {
            var entityType = typeof(TEntity);
            var type = typeof(Scan).Assembly
                .GetTypes()
                .First(x => x == entityType);

            while (true)
            {
                yield return Activator.CreateInstance(type) as TEntity;
            }
        }
    }
}
